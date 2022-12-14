module.exports = async function (context, req) {
  const date = "2022-12-14T02:19:34.757Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

