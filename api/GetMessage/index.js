module.exports = async function (context, req) {
  const date = "2022-07-27T13:38:36.628Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

