module.exports = async function (context, req) {
  const date = "2023-09-13T17:07:39.119Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

