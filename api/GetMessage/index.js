module.exports = async function (context, req) {
  const date = "2023-04-23T18:10:05.651Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

