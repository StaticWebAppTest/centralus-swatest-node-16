module.exports = async function (context, req) {
  const date = "2023-12-28T09:09:30.165Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

