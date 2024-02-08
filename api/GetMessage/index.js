module.exports = async function (context, req) {
  const date = "2024-02-08T07:09:47.396Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

