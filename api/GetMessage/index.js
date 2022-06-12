module.exports = async function (context, req) {
  const date = "2022-06-12T15:09:54.651Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

