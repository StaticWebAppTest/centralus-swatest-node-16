module.exports = async function (context, req) {
  const date = "2022-06-23T22:09:45.440Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

