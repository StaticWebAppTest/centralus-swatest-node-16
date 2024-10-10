module.exports = async function (context, req) {
  const date = "2024-10-10T18:15:23.653Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

