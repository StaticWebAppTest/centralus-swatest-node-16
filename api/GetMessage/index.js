module.exports = async function (context, req) {
  const date = "2022-11-12T09:11:35.529Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

