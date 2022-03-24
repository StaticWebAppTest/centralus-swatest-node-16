module.exports = async function (context, req) {
  const date = "2022-03-24T09:10:39.529Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

