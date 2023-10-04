module.exports = async function (context, req) {
  const date = "2023-10-04T07:08:42.627Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

