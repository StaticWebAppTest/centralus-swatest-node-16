module.exports = async function (context, req) {
  const date = "2023-07-18T07:09:01.869Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

