module.exports = async function (context, req) {
  const date = "2024-06-15T13:10:15.533Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

