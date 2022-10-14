module.exports = async function (context, req) {
  const date = "2022-10-14T09:18:05.050Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

