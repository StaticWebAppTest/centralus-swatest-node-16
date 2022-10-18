module.exports = async function (context, req) {
  const date = "2022-10-18T11:12:51.627Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

