module.exports = async function (context, req) {
  const date = "2023-10-09T07:08:33.595Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

