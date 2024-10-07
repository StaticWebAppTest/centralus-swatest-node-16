module.exports = async function (context, req) {
  const date = "2024-10-07T18:15:42.908Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

