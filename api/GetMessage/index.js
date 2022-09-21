module.exports = async function (context, req) {
  const date = "2022-09-21T17:27:20.595Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

