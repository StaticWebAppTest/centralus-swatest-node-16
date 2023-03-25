module.exports = async function (context, req) {
  const date = "2023-03-25T15:08:18.364Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

