module.exports = async function (context, req) {
  const date = "2022-07-28T17:22:18.505Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

