module.exports = async function (context, req) {
  const date = "2023-11-28T13:11:43.068Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

