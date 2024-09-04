module.exports = async function (context, req) {
  const date = "2024-09-04T07:10:45.668Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

