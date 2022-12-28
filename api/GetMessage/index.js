module.exports = async function (context, req) {
  const date = "2022-12-28T22:08:45.294Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

