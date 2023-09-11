module.exports = async function (context, req) {
  const date = "2023-09-11T18:11:12.558Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

