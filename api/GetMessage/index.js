module.exports = async function (context, req) {
  const date = "2022-04-12T14:10:01.529Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

