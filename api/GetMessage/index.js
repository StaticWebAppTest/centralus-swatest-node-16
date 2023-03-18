module.exports = async function (context, req) {
  const date = "2023-03-18T04:11:08.423Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

