module.exports = async function (context, req) {
  const date = "2023-02-08T05:09:33.966Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

