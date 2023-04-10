module.exports = async function (context, req) {
  const date = "2023-04-10T17:07:55.627Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

