module.exports = async function (context, req) {
  const date = "2022-07-09T18:12:13.528Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

