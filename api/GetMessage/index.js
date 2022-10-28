module.exports = async function (context, req) {
  const date = "2022-10-28T17:17:14.468Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

