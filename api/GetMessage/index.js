module.exports = async function (context, req) {
  const date = "2022-05-10T09:11:43.075Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

