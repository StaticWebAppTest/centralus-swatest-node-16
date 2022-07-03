module.exports = async function (context, req) {
  const date = "2022-07-03T14:09:28.410Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

