module.exports = async function (context, req) {
  const date = "2023-07-10T13:20:07.959Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

