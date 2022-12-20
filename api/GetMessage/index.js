module.exports = async function (context, req) {
  const date = "2022-12-20T11:07:50.739Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

