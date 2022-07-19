module.exports = async function (context, req) {
  const date = "2022-07-19T07:09:56.981Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

