module.exports = async function (context, req) {
  const date = "2024-06-11T17:10:14.533Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

