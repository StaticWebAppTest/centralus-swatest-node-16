module.exports = async function (context, req) {
  const date = "2023-10-11T09:09:19.506Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

