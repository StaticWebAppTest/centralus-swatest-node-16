module.exports = async function (context, req) {
  const date = "2022-12-14T17:08:57.193Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

