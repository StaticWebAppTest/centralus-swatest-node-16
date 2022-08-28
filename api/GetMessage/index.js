module.exports = async function (context, req) {
  const date = "2022-08-28T17:12:45.165Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

