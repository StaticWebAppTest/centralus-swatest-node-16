module.exports = async function (context, req) {
  const date = "2022-10-12T18:21:06.559Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

