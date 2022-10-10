module.exports = async function (context, req) {
  const date = "2022-10-10T09:19:37.491Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

