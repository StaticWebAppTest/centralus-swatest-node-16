module.exports = async function (context, req) {
  const date = "2022-06-11T09:09:43.627Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

