module.exports = async function (context, req) {
  const date = "2024-07-03T17:09:08.595Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

