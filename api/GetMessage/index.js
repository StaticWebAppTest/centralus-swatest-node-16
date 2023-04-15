module.exports = async function (context, req) {
  const date = "2023-04-15T07:08:01.533Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

