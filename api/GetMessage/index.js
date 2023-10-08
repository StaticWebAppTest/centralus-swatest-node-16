module.exports = async function (context, req) {
  const date = "2023-10-08T18:10:24.558Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

