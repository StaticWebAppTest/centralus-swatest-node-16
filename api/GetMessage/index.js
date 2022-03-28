module.exports = async function (context, req) {
  const date = "2022-03-28T17:13:02.518Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

