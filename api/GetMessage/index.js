module.exports = async function (context, req) {
  const date = "2024-03-04T18:11:43.119Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

