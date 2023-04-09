module.exports = async function (context, req) {
  const date = "2023-04-09T09:07:54.429Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

