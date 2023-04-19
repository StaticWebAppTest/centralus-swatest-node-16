module.exports = async function (context, req) {
  const date = "2023-04-19T09:09:06.966Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

