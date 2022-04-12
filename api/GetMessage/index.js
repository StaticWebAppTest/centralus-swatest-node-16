module.exports = async function (context, req) {
  const date = "2022-04-12T08:13:43.559Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

