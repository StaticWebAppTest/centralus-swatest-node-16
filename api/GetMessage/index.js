module.exports = async function (context, req) {
  const date = "2024-09-16T07:11:42.533Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

