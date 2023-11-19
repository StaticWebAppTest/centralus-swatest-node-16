module.exports = async function (context, req) {
  const date = "2023-11-19T18:10:36.401Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

