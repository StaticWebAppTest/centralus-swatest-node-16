module.exports = async function (context, req) {
  const date = "2023-11-21T09:09:38.533Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

